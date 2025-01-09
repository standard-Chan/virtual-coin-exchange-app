# LEARN

### using storybook 

  1. add 
  ```
  yarn add -dev @storybook/react
  ```
  2. package.json file 추가
  ```
  ... 
  "scripts": {
    "name": start-storybook -p <port number> -c <dir>

    // ex) "storybook": "start-storybook -p 9001 -c .storybook"
  }
  ```
  npm run start storybook

  3. config.js 와 story 연결


### 설계 순서
  1. 전체적인 페이지 구상 설계
  2. 각 구상에 사용되는 UI 설계
    각 기본 UI, 공용 컴포넌트
  3. UI 및 공용 컴포넌트 구현
  4. 각 UI들을 사용하여 보여주는 components 설계.
    ex. 상단 정보화면 => CoinOverView => InlineList => CoinDashlet => Card => Spacing => Heading(Text), InlineList(button)
  5. components를 순서대로 구현한다. 
    ex. 상단 정보 화면, 하단 정보 화면, ...


### 컴포넌트 설계

  4. 하단 정보 화면 
      거래리스트 => {검색, 검색 결과} 
      검색 => 
      검색 결과 => 
  

### common components
  자주 사용하는 컴포넌트들을 공용 컴포넌트로 만들기 
  props로 style 관련 props를 입력받는다. 그리고 default 값을 설정하여 입력받지 않아도 되도록 만든다.
  1. Text
  2. Heading
  3. Button
  4. Card
  5. Spacing
  6. List
  7. Toast

  해당 컴포넌트를 style, type 등등을 인자로 받아 출력해서 간편하게 왔다갔다 없이 만들어 내게끔 만들자
  여기에서는 style을 아예 별도의 파일로 만들어서 style.alignCenter 처럼 사용했는데, 이 방법도 유용한 것 같다.


# 설계 외의 react 관련 사항

### CONTEXT API
  react에서 자식 컴포넌트에 props로 전달하는 대신, 계층 구조 전체에서 데이터를 공유하고 싶을때 사용. 전역 변수와 비슷
  Provider와 Consumer 사용법

```
  const MyContent = createContext();
  // Provider 사용
    const App = () => {
      return (
        <MyContext.Provider value="Hello Context!">
          <ChildComponent />
        </MyContext.Provider>
      );
    };

    const ChildComponent = () => {
      return <GrandchildComponent />;
    };

    const GrandchildComponent = () => {
      return (
        <MyContext.Consumer>
          {value => <p>{value}</p>}
        </MyContext.Consumer>
      );
    };
```

  저장할 때는 <.Provider>에 props로 저장하고, 사용할때는 <.Consumer>로 감싸서 사용하면 된다.
  같은 context에서 파생된 얘들이라서 서로 연결되어있다. 그래서 provider에 저장하면 consumer로 쓸 수 있는거임