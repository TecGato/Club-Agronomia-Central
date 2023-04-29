

export function Banner() {
    return (
        <div className="relative h-screen">
            <video className="absolute top-0 left-0 w-full object-cover z-10 min-h-full" autoPlay loop muted>
                <source src="/banner-video/_import_628b44c9dafd83.59799929_FPpreview.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
