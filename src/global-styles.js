import { createGlobalStyle } from "styled-components";
import colors from "constants/colors";
//MAKE IT SO IT DONT SCROLL NO MO

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;

    }

    
    html,
    body {
        font-size: 18px;
        box-sizing: border-box;
        margin: 0;
        height: 100%;
        width: 100%;
        overflow: auto;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${colors.pageBackground};
    }

    .cssload-container{
	display: block;
	margin: auto;
	width:49px;
}

.cssload-loading{
	width: 44px;
	height: 44px;
	text-align: left;
	animation:cssload-loading-ani1 2.3s ease-in-out infinite;
		-o-animation:cssload-loading-ani1 2.3s ease-in-out infinite;
		-ms-animation:cssload-loading-ani1 2.3s ease-in-out infinite;
		-webkit-animation:cssload-loading-ani1 2.3s ease-in-out infinite;
		-moz-animation:cssload-loading-ani1 2.3s ease-in-out infinite;
}
.cssload-loading i,
.cssload-loading i:before{
	content: "";
	width: 44px;
	height: 44px;
	position: absolute;
}
.cssload-loading i{
	border-radius: 50%; 
	overflow: hidden;
}
.cssload-loading i:nth-child(1){
	background: #C42021;
	transform:translate(0,-24px);
		-o-transform:translate(0,-24px);
		-ms-transform:translate(0,-24px);
		-webkit-transform:translate(0,-24px);
		-moz-transform:translate(0,-24px);
}
.cssload-loading i:nth-child(1):before{
	background: rgb(17,53,119);
	bottom: 0;
	animation:cssload-loading-ani2 2.3s ease-in-out infinite;
		-o-animation:cssload-loading-ani2 2.3s ease-in-out infinite;
		-ms-animation:cssload-loading-ani2 2.3s ease-in-out infinite;
		-webkit-animation:cssload-loading-ani2 2.3s ease-in-out infinite;
		-moz-animation:cssload-loading-ani2 2.3s ease-in-out infinite;
}
.cssload-loading i:nth-child(2){
	background: rgb(17,53,119);
	transform:translate(0,24px);
		-o-transform:translate(0,24px);
		-ms-transform:translate(0,24px);
		-webkit-transform:translate(0,24px);
		-moz-transform:translate(0,24px);
}
.cssload-loading i:nth-child(2):before{
	animation:cssload-loading-ani2 2.3s ease-in-out infinite;
		-o-animation:cssload-loading-ani2 2.3s ease-in-out infinite;
		-ms-animation:cssload-loading-ani2 2.3s ease-in-out infinite;
		-webkit-animation:cssload-loading-ani2 2.3s ease-in-out infinite;
		-moz-animation:cssload-loading-ani2 2.3s ease-in-out infinite;
	background: #C42021;
}



@keyframes cssload-loading-ani1{
	40%,50%{
		transform:rotate(180deg);
	}
	90%,100%{
		transform:rotate(360deg);
	}
}

@-o-keyframes cssload-loading-ani1{
	40%,50%{
		-o-transform:rotate(180deg);
	}
	90%,100%{
		-o-transform:rotate(360deg);
	}
}

@-ms-keyframes cssload-loading-ani1{
	40%,50%{
		-ms-transform:rotate(180deg);
	}
	90%,100%{
		-ms-transform:rotate(360deg);
	}
}

@-webkit-keyframes cssload-loading-ani1{
	40%,50%{
		-webkit-transform:rotate(180deg);
	}
	90%,100%{
		-webkit-transform:rotate(360deg);
	}
}

@-moz-keyframes cssload-loading-ani1{
	40%,50%{
		-moz-transform:rotate(180deg);
	}
	90%,100%{
		-moz-transform:rotate(360deg);
	}
}

@keyframes cssload-loading-ani2{
	40%,100%{
		height:100%;
	}
	50%,90%{
		height:0;
	}
}

@-o-keyframes cssload-loading-ani2{
	40%,100%{
		height:100%;
	}
	50%,90%{
		height:0;
	}
}

@-ms-keyframes cssload-loading-ani2{
	40%,100%{
		height:100%;
	}
	50%,90%{
		height:0;
	}
}

@-webkit-keyframes cssload-loading-ani2{
	40%,100%{
		height:100%;
	}
	50%,90%{
		height:0;
	}
}

@-moz-keyframes cssload-loading-ani2{
	40%,100%{
		height:100%;
	}
	50%,90%{
		height:0;
	}
}
`;
