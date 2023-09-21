import { Tabs } from './Tabs'
import '../../../styles/css/styles.css'

const Header = () => {
  return (
    <header id="header" class="header">
      <a href="./account.html" id="my-account">My account &rightarrow;</a>
      <div id="tabs" className="headerTabs">
        <Tabs />
      </div>
    </header>
  )
}

export { Header }