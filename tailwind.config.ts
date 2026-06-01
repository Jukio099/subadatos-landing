
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				suba: {
					purple: {
						50: '#faf5ff',
						100: '#f3e8ff',
						200: '#e9d5ff',
						300: '#d8b4fe',
						400: '#a855f7',
						500: '#9333ea',
						600: '#7e22ce',
						700: '#6B21A8',
						800: '#581c87',
						900: '#3b0764',
						950: '#1e0533',
					},
					green: {
						50: '#f0fdf4',
						100: '#dcfce7',
						200: '#bbf7d0',
						300: '#86efac',
						400: '#4ade80',
						500: '#22c55e',
						600: '#16A34A',
						700: '#15803d',
						800: '#166534',
						900: '#14532d',
						950: '#052e16',
					},
					gold: {
						50: '#fffbeb',
						100: '#fef3c7',
						200: '#fde68a',
						300: '#fcd34d',
						400: '#fbbf24',
						500: '#F59E0B',
						600: '#d97706',
						700: '#b45309',
						800: '#92400e',
						900: '#78350f',
						950: '#451a03',
					},
					dark: {
						50: '#1a1a2e',
						100: '#16162a',
						200: '#111118',
						300: '#0a0a0f',
						400: '#08080f',
						500: '#050508',
					},
				},
				nature: {
					50: '#f2fcf5',
					100: '#e8f9ed',
					200: '#d1f4db',
					300: '#a8ebbf',
					400: '#77db9a',
					500: '#4fc476',
					600: '#35a85d',
					700: '#2c864c',
					800: '#286a3f',
					900: '#235835',
					950: '#0f3119',
				},
				earth: {
					50: '#f9f6f0',
					100: '#f0e9db',
					200: '#e1cfb3',
					300: '#d0af85',
					400: '#c2935f',
					500: '#b47c45',
					600: '#9e653a',
					700: '#82502f',
					800: '#6c422b',
					900: '#5c3926',
					950: '#331c12',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Montserrat', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-scale': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
					'50%': { transform: 'translateY(-20px) translateX(10px)' },
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(107, 33, 168, 0.3), 0 0 40px rgba(107, 33, 168, 0.1)',
					},
					'50%': {
						boxShadow: '0 0 30px rgba(107, 33, 168, 0.6), 0 0 60px rgba(107, 33, 168, 0.3)',
					},
				},
				'pulse-glow-green': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(22, 163, 74, 0.3), 0 0 40px rgba(22, 163, 74, 0.1)',
					},
					'50%': {
						boxShadow: '0 0 30px rgba(22, 163, 74, 0.6), 0 0 60px rgba(22, 163, 74, 0.3)',
					},
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'gradient-pan': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'line-draw': {
					'0%': { width: '0%' },
					'100%': { width: '100%' },
				},
				'count-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'data-flow': {
					'0%': { strokeDashoffset: '1000', opacity: '0' },
					'20%': { opacity: '1' },
					'80%': { opacity: '1' },
					'100%': { strokeDashoffset: '0', opacity: '0' },
				},
				'grid-pan': {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '40px 40px' },
				},
				'fade-in-delayed': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'fade-scale': 'fade-scale 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				float: 'float 4s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
				'pulse-glow-green': 'pulse-glow-green 2.5s ease-in-out infinite',
				shimmer: 'shimmer 3s linear infinite',
				'gradient-pan': 'gradient-pan 8s ease infinite',
				'line-draw': 'line-draw 1.2s ease-out forwards',
				'count-up': 'count-up 0.6s ease-out forwards',
				'data-flow': 'data-flow 3s linear infinite',
				'grid-pan': 'grid-pan 20s linear infinite',
				'fade-in-delayed': 'fade-in-delayed 0.8s ease-out 0.2s forwards',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 40%, #0a0a0f 100%)',
				'mesh-gradient': 'radial-gradient(at 27% 37%, hsla(271, 76%, 40%, 1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(142, 71%, 45%, 0.6) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(38, 92%, 50%, 0.5) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%), radial-gradient(at 97% 96%, hsla(38, 92%, 50%, 1) 0px, transparent 50%), radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%), radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
