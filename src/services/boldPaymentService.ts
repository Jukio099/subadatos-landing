
// Bold Payment Service
// This service handles all API calls to the Bold payment gateway

// Configuration
// In a real production environment, these values should be stored securely in environment variables
const BOLD_API_KEY = "YOUR_BOLD_API_KEY"; // Replace with your actual Bold API key
const BOLD_API_BASE_URL = "https://integrations.api.bold.co";

// Types
interface PaymentMethod {
  name: string;
  enabled: boolean;
}

interface Terminal {
  terminal_model: string;
  terminal_serial: string;
  status: string;
  name: string;
}

interface PaymentResponse {
  integration_id: string;
}

// Helper function for API calls
const apiFetch = async <T>(endpoint: string, options = {}): Promise<T> => {
  const url = `${BOLD_API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Authorization': `x-api-key ${BOLD_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };
  
  const response = await fetch(url, { ...defaultOptions, ...options });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`API error: ${response.status} - ${JSON.stringify(errorData)}`);
  }
  
  const data = await response.json();
  
  if (data.errors && data.errors.length > 0) {
    throw new Error(`API error: ${JSON.stringify(data.errors)}`);
  }
  
  return data.payload;
};

// Get available payment methods
export const getPaymentMethods = async (): Promise<PaymentMethod[]> => {
  try {
    const data = await apiFetch<{ payment_methods: PaymentMethod[] }>('/payments/payment-methods');
    return data.payment_methods;
  } catch (error) {
    console.error('Error fetching payment methods:', error);
    return [];
  }
};

// Get available terminals
export const getTerminals = async (): Promise<Terminal[]> => {
  try {
    const data = await apiFetch<{ available_terminals: Terminal[] }>('/payments/binded-terminals');
    return data.available_terminals;
  } catch (error) {
    console.error('Error fetching terminals:', error);
    return [];
  }
};

// Create a new payment
export const createPayment = async (paymentData: any): Promise<PaymentResponse> => {
  try {
    const data = await apiFetch<PaymentResponse>('/payments/app-checkout', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
    
    return data;
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
};
