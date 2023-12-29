
const Footer = () => {
  return (
    <footer className="py-12 flex flex-col gap-12 lg:flex-row items-center justify-between">
        <ul className="text-title flex gap-6">
            <li><a className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500 font-semibold" href="">About</a></li>
            <li><a className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500 font-semibold" href="">Projects</a></li>
            <li><a className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500 font-semibold" href="">Speaking</a></li>
            <li><a className="hover:text-darkGreen transition-all text-sm hover:text-base duration-500 font-semibold" href="">Uses</a></li>
        </ul>
        <p className="text-subtitle">© 2023 Spencer Sharp. All rights reserved.</p>

    </footer>
  )
}

export default Footer