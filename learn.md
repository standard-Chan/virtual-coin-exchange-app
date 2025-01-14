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

### redux
  redux는 props을 쉽게 관리하기 위해 사용함.
  원래 react 컴포넌트에서 state를 변경하려면, 부모 컴포넌트에 쭉 타고 내려와서 반영해야하는데, 이게 정말 불편함. 그래서 props 타고 내려올 필요없이, store에서 전역변수처럼 관리하자 하는게 redux.
  즉, 전역적으로 사용하는 변수와 이를 변경하는 함수를 모아서 한번에 관리하고 사용하자는게 redux이다.

  ※근데 이러면 문제가 생긴다. redux 함수 내에서 비동기 처리를 할 수 없고, 각 함수 내부의 복잡한 기능을 넣기 힘들어진다. 

  사용방법
  1. store에 값을 저장해놓은다.
  2. store에 값 변경 요청을 reducer로 보낸다. (dispatch(요청)로 보낸다. 요청은 action = {type: 요청 타입}으로 보낸다.)
  3. reducer에서 요청을 받고 해당 요청에 맞는 과정을 처리한다. 보통 store에 저장된 state를 변경하는 처리를 한다.
  4. 처리된 결과를 store의 state에 저장한다.
  5. 이후에 해당 state를 마음대로 꺼내 쓰고 state를 바꾸고 싶으면 또 요청 한다.
  state는 useSelector((state) => {return state.사용할거}) 를 통해 사용하면 된다.

### redux 미들웨어
  원래 redux는 다음과 같이 이루어진다.
  dispatch -> action객체 생성 -> 모든 reducer에 전달 -> 상태 변화

  그런데 미들웨어가 들어가면 다음 단계가 추가된다. dispatch(action)이 실행된 후 리듀서가 상태를 변경하기 전에 특정 작업을 수행할 수 있게 해준다.
  dispatch -> 여기는 내가 새로 추가할 수 있는 기능 -> action 객체 생성 -> 모든 reducer에 전달 -> 상태 변화

  redux의 thunk를 사용하면 함수의 action도 받을 수 있다. (원래는 객체만 가능)
  다음의 미들웨가 추가되기 때문임.
  const thunk = store => nextRunner => action => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    return nextRunner(action);
  } 

  그래서 함수 인자를 받을 때, dispatch와 state를 받아서 사용할 수 있다.

  이 프로젝트에서 해당 thunk redux를 사용하여 개선한 점을 살펴보자.

  원래 getAxios 처리를 TransactionListContainer 컴포넌트에서 useEffect에서 처리하였다.
  하지만 thunk redux를 사용하면서 해당 처리 기능을 action1으로 옮기고 action1에서 기존의 setTransactionList를 dispatch하는 방식으로 처리하였다. 다음을 살펴보자.

  ``` 
    //기존 방식
  const setTransactionList = (transactions) => {
    return {
      type: SET_TRANSACTION_LIST,
      payload: transactions,
    }
  };

  // 위 함수를 container로 전달하여 렌더링 컴포넌트에서 사용하였다. 
  ...
    useEffect (() => {
    Api.get("/transactions").then(({ data }) => dispatch(setTransactionList(data)));
    },[]);
  ...
  ```
  
  thunk redux를 사용하면 다음처럼 변환할 수 있다.
  ```
    //렌더링 컴포넌트
    ...
    useEffect(() => {
    requestTransactionList();
    })
    ...

    미들웨어를 통해 다음처럼 변경
    const setTransactionList = (transactions) => {
      return {
        type: SET_TRANSACTION_LIST,
        payload: transactions,
      }
    };

    const requestTransactionListAction = () => {
      return (dispatch) => {
        Api.get("/transactions").then(({ data }) => dispatch(setTransactionList(data)));
      }
    }

  ```

    요약해보자.

    미들웨어를 사용하면 기존 처리방식을 분리하지 않고 처리가 가능하다.

    기존 처리 방식
    컴포넌트에서 데이터 얻기 -> action2 컴포넌트에서 해당 데이터를 dispatch -> reducer 및 state 갱신

    thunk 처리 방식
    컴포넌트에서 dispatch -> 데이터얻기 : action1 -> 데이터 action으로 변환 : action2 -> reducer 및 state 갱신