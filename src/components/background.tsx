export function Background() {
  return (
    <div className='fixed inset-0 -z-10 w-screen h-screen bg-background bg-[radial-gradient(circle_at_center,_#e5e7eb_1px,_transparent_1px)] dark:bg-[radial-gradient(circle_at_center,_#131313_1px,_transparent_1px)] [background-size:16px_16px]'>
      <div className='absolute top-0 right-0 h-[400px] w-[400px] translate-x-[-20%] translate-y-[-70%] md:translate-x-[10%] md:-translate-y-[10%] rounded-full bg-[rgba(11,7,5,0.4)] opacity-60 blur-[100px] animate-pulse' />
      <div className='absolute bottom-0 left-0 h-[400px] w-[400px] translate-x-[10%] translate-y-[50%] md:-translate-x-[20%] md:translate-y-[35%] rounded-full bg-[rgba(12,12,10,0.4)] opacity-60 blur-[100px] animate-pulse' />
      <div className='absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-[20%] translate-y-[40%] md:translate-x-[30%] md:translate-y-[30%] rounded-full bg-[rgba(5,7,5,0.4)] opacity-60 blur-[80px] animate-pulse' />
      <div className='absolute top-0 left-0 h-[300px] w-[300px] translate-x-[-10%] translate-y-[-30%] md:translate-x-[-20%] md:translate-y-[-20%] rounded-full bg-[rgba(63,69,152,0.4)] opacity-60 blur-[80px] animate-pulse' />
    </div>
  )
}
