'use client'

const ClientComponent = ({ children }: any) => {
  console.log('ClientComponent rendered')
  return (
    <>
      <p>Client Component</p>
      {children}
    </>
  )
}

export default ClientComponent
