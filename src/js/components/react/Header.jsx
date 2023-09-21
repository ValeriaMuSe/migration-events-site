import { Tabs } from './Tabs'

const Header = () => {
  return (
    <header id="header" className="header">
      <a href="./account.html" id="my-account">My account</a>
      <div id="tabs" className="header__tabs">
        <Tabs />
      </div>
    </header>
  )
}

export { Header }