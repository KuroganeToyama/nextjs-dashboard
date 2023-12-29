// Store fonts used throughout the app

// Import Inter font to be primary font
import { Inter, Lusitana } from 'next/font/google';

// Specify a subset of the Inter font, in this case it's latin
export const inter = Inter({ subsets: ['latin'] });

// Specify another font
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});