const Layout = ({ children }) => {
  return (
    <div className='min-h-screen min-w-full '>
      <div className='container mx-auto px-4 py-2'>{children}</div>
    </div>
  )
}

export default Layout
