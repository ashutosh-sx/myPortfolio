export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Ashutosh Saxena. All rights reserved.</p>
        <p className="text-gray-500 text-xs mt-1">Built with Next.js, Three.js, and Tailwind CSS</p>
      </div>
    </footer>
  )
}
