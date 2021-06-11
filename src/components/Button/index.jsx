const Button = (props) => {
    let { nome } = props;
    return(
        <div>
            <button className="btn">{nome}</button>
        </div>
    );
}

export default Button;