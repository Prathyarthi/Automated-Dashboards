function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen h-screen overflow-hidden flex flex-col">{children}</div>
    )
}

export default layout