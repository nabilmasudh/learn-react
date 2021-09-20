import useWindowSize from "../hooks/useWindowSize";

function LayoutComponent1() {
    const onSmallScreen = useWindowSize(999)
    
    return (
        <div>
            <h1>This is LayoutComponent-1</h1>
            <p>You are browsing on {onSmallScreen ? 'small' : 'large'} device</p>
        </div>
    )
}

export default LayoutComponent1;
