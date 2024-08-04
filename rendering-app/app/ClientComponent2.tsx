'use client'

import ServerComponent from './ServerComponet'

const ClientComponent2 = () => {
  console.log('ClientComponent rendered')
  return (
    <>
      <p>Client Component</p>
      <ServerComponent />
    </>
  )
}

export default ClientComponent2
