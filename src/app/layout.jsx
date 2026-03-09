import './globals.css'

export const metadata = {
    title: 'Tierra Querida - Burgers',
    description: '¡Déjate tentar! El mejor sabor siempre te espera.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Pacifico&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
