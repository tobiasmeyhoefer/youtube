export const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-bold text-2xl text-zinc-800 underline">{children}</h1>
  )
}

export const P = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-md text-zinc-900 max-w-[500px] antialiased leading-7">
      {children}
    </p>
  )
}

export const DescriptiveP = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm mb-4 text-zinc-500 font-light">{children}</p>
}
