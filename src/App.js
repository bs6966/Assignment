import React from 'react'
import Header from './Header'
import { Mobile } from './components/mobile/component'
import { Laptop } from './components/laptop/component'
import { Desktop } from './components/desktop/component'
import { useMediaQuery} from 'react-responsive'

const App = () => {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  return (
    <div>
       <Header />
       {isMobileDevice && <Mobile />}
  {isDesktop && <Desktop />}
  {isLaptop && <Laptop />}

    </div>
  )
}

export default App