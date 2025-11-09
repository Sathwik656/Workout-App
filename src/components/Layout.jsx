export default function Layout(props){
  const {children} = props
  const header = (
    <header className="site-header">
      <div className="brand-wrap">
        <h1 className="brand text-gradient">BroGram</h1>
        <p className="tagline">30-day strength & habit builder</p>
      </div>
      <div className="header-meta">
        <small className="creator">Built by XAVY</small>
      </div>
    </header>
  );

  const footer = (
    <footer className="site-footer">
      <p>Made with focus • Track progress • Keep leveling up</p>
    </footer>
  );

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  )
}
