// rface => quick setup es7+ shortcuts

import {appleImg, searchImg, bagImg} from '../utils'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src={appleImg} alt="Apple" width={14} height={18}/>
        </nav>

        <div>
            {['Phones', 'Macbooks','Tablets'].map((nav)=>(
                <div key={nav}>
                    {nav}
                </div>
            ))} 
        </div>

        <div>
            <img src={searchImg} alt="search" width={18} height={18}/>
            <img src={bagImg} alt="bag" width={18} height={18}/>
        </div>
    </header>
  )
}

export default Navbar