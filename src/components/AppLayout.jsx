import AppNav from "./AppNav";


const AppLayout = ({children}) => {
  return (
    <div>
      <AppNav/>
      <div>
        {children}
      </div>
    </div>
  )

}

export default AppLayout;