export default function Apple({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <h3 style={{display : 'inline', margin: '3px' }}>Apple</h3>
        <>{children}</>
      </>
    )
  }