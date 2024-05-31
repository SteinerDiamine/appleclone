import { PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Light'
import IPhone from '../components/Iphone'


const ModelView = ({index , groupRef,gsapType,controlRef,setRotationSize,size , item}) => {
  return (
    <div>
        <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0,0,4]}/>
      <Lights/>
      <Suspense fallback={<div>Loading</div>}>
        <IPhone/>

      </Suspense>
      
      </View>
    </div>
  )
}

export default ModelView  



