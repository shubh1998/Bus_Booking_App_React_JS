import Header from 'layouts/Header/index'

const PublicRoute = ({
  Component, showFooter = false, showHeader,
  headerVariant, showLeftSideBar, showRightSideBar
}) => {
  return (
    <>
      {showHeader ? <Header /> : <></>}
      <Component />
    </>
  )
}

export default PublicRoute
