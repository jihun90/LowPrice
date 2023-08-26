export default function Apple({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h3 className='text-2xl inline-block font-semibold'>Apple</h3>
            <>{children}</>
        </>
    );
}
