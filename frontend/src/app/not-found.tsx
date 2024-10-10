


export default function NotFound() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-2xl mb-8">Oops! Page Not Found</h2>
                <p className="text-lg mb-8">The page you're looking for doesn't exist or has been moved.</p>
                <a href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                    Go Back Home
                </a>
            </div>
        </div>
    )
}