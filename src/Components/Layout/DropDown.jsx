const DropDown = ({ className, children, dropRef }) => {
    return <div className={className} ref={dropRef}>{children}</div>

}

export default DropDown