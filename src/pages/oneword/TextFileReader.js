import React from "react";


class TextFileReader extends React.Component {
    state={
        text:""
    }

	componentDidMount() {
		this.readTextFile(this.props.txt);
	}

	readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
	};

	render() {
		return (
			<div>
				{this.state.text.split(',').map((item, key)  => {
						
						if(item.toString()==="aba güreşi")
						return <span key={key}>{item}<br /></span>;
						else return null;
				})}
                

                {
                   
                }

			</div>
		);
	}
}

export default TextFileReader;