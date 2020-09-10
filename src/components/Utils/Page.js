import React, { useEffect } from 'react'

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | WebDevsCom`
    // eslint-disable-next-line
  }, [props.title]);
  return (
    <>
      {props.children}
    </>
  )
}

export default Page;