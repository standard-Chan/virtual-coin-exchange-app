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

## Modal 관리
  ### 기초적인 Modal 컴포넌트
  react에서 Modal은 보통 context API를 통해서 관리한다. 다음 Modal 컴포넌트를 보자.
  Modal 내부 요소들은 children을 통해 전달한다.
  ```
  const Modal = ({children}) => {
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <button onClick={onClose} style={styles.closeButton}>
            닫기
          </button>
          {children}
        </div>
      </div>
    );
  }
  // 이후 사용시
  <Modal> <ModalContent {...props}/> </Modal>
  ```
  ### context API를 통한 Modal 관리
  1. Provider 다음 2가지를 value를 전달하고, rendering에 Modal jsx를 포함한다.

    - openModal 함수 (ID)
    - closeModal 함수 ()
    - Content = contentMap[ID]

    위 2 함수의 기능은 다음과 같이 구현한다.
    - modal open
      openModal(MODAL_ID, MODAL_PROPS) 이를 통해 
```
    rendering 할때 content를 포함한다.
    return (
      <Provider value = ..>
        <Content>
      </Provider>
    )
```
  ##### 구체적인 설명
  1. Provider에 미리 Modal들의 jsx를 저장해놓는다.
    - 다음과 같이 createModalProvider로 사용할 Modal의 jsx를 모아두면 좋다.
    ```
      const ModalProvider = createModalProvider({
        [MODAL_ID]: Modal 컴포넌트, // TradCoinPage는 모달 내용을 렌더링할 컴포넌트
      })
    ```

  2. 다음과 같이 함수 형태로 반환하도록 만든다. 
  ```
    function createModalProvider(modalContentMap = {}) {
      return function ModalProvider({children}) {
        // HOOK
        const showModal  // 모달을 화면에 출력할지 결정하는 훅

        MODAL_OPEN_함수 = (open할 MODAL_ID, MODAL에 전달할 props) => {}
        MODAL_CLOSE_함수 = () => ShowModal 변수를 false로 변경
        // 아래를 통해서 MODAL의 JSX를 얻는다.
        const ModalContent = modalContentMap[MODAL_ID];
        // 이후 렌더링
        return (
          <Provider value = {MODAL_OPEN, MODAL_CLOSE}>
            {children} // Modal이 없을 경우에 그대로 나오는 컨텐츠
            {showModal && ModalContent && (
              <Modal>
                <ModalContent {...modalProps}>
              </Modal>
              )}
          </Provider>
        )
      }
    }
  ```



# 설계 외의 react 관련 사항

### CONTEXT API
  react에서 자식 컴포넌트에 props로 전달하는 대신, 계층 구조 전체에서 데이터를 공유하고 싶을때 사용. 전역 변수와 비슷
  Provider와 Consumer 사용법

```
  const {Provider, Consumer} = createContext({});
  <Provider value = { 사용할 값 }>
    <Consumer>
    {( value ) => (<div>{value}</div>)}
    </Consumer>
  </Provider>

  // 실제 사용 예시
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
  같은 context에서 파생된 얘들이라서 서로 연결되어있다. 그래서 provider에 저장하면 consumer로 쓸 수 있는것.


### 