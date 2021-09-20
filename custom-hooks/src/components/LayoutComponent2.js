import useWindowSize from "../hooks/useWindowSize"

function LayoutComponent2() {
    const onSmallScreen = useWindowSize(999)

    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This is LayoutComponent-2</h1>
            <p>{onSmallScreen ? 'Small' : 'Large'}</p>
        </div>
    )
}

export default LayoutComponent2;
