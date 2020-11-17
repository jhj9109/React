# 리액트를 다루는 기술
##  15장 Context API
### Context API란?
- react에서 전역적으로 사용할 데이터가 있을때 유용한 기능
  - 사용자 로그인 정보
  - 애플리케이션 환경 설정
  - 테마
- react library에서도 널리 사용
  - Redux
  - React Router
  - styled-componet
- React v16.3 이후 개선이 많이 되며, 단순한 전역 상태 관리에 Context API를 활용하는 것이 가능해짐
  - 단, Redux를 사용시 이점이 있으므로, 모든 상황을 대체 가능한 것은 아니다.
    - 향상된 성능
    - 미들웨어 기능
    - 강력한 개발자 도구
    - 코드의 높은 유지 보수성
### 기본문법
#### 0. value
- Context 내부는 value를 통해 접근한다.
#### 1. createContext 함수
- 새로운 Context 생성
```react
import { createContext } = from 'react';
export default const ColorContext = createConetext({ key: value })
```
#### 2. Context.Consumer 컴포넌트
- Context의 value를 로드한다.
- Function as a chile(or Render Props) 패턴 사용
```react
import React from 'react';
import ColorContext from '../contexts/color';

export default const ColorBox = () => {
    return (
        <ColorContext.Consumer>
            {value => (<div> {value.key} </div>)}
        </ColorContext.Consumer>
    )
}
```
#### 3. Context.Provider 컴포넌트
- Context의 value값을 설정할 수 있다.
- static
- Provider 사용시 value를 명시해야만 한다. => 에러 발생
```react
improt React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

const App = () => {
    return (
        <ColorContext.Provider value={{ key: value }}>
            <ColorContext.Consumer>
                {value => (<div> {value.key} </div>)}
            </ColorContext.Consumer>
        </ColorCOntext.Provider>
    )
}
```
### 동적 Context 사용
- Context의 value에는 state뿐 아니라 함수값을 전달하는 것이 가능.
- (필수는 아니지만) value에 state 와 actions에 state와 function을 묶어서 전달하면 좋다.
- createContext의 기본값은 실제 Provider를 통해 넣어줄 value값과 일치시켜 주는 것이 좋다.
  - Provider를 (실수로? or 필요없어서(기본값만 사용)) 사용하지 않을때도 에러가 발생하지 않는다.
  - 내부 값이 어떻게 구성되어있는지 잘 보인다.
```react
import React, { createContext, useState } from 'react';
export default const ColorContext = createContext({
    state: { key: value },
    actions: { fName: () => {} }
})

const ColorProvider = ({ children }) => {
    const [key, setKey] = useState("초기값")
    const value = {
        state: {
            key
        },
        actions: {
            setKey
        }
    }
    return <ColorContext.Provider>{children}</ColorContext.Provider>
}
const ColorConsumer = ColorContext.Consumer // 동일 : const { Consumer: ColorConsumer } = ColorContext

export { ColorProvider, ColorConsumer };
```