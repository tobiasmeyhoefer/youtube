import ClientComp from './ClientComponent'
import ClientComponent2 from './ClientComponent2'
import ServerComp from './ServerComponet'

export default function Home() {
  return (
    <>
      <ClientComp>
        <ServerComp/>
      </ClientComp>
    </>
  )
}
