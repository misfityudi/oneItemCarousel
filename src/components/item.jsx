import React from "react";

const ItemStyle = {
  width: "90%",
  height: "400px",
  position: "relative",
  WebkitBackdropFilter: "blur(30px)",
  backdropFilter: "blur(30px)",
  overflow: "hidden",
  borderRadius: "15px",
  boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.3)"
};

const ImageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%"
};

const ImageStyle = {
  width: "100%",
  height: "auto",
  top: "0px",
  left: "0px"
};

const TitleStyle = {
  width: "92%",
  position: "absolute",
  display: "flex",
  justifyContent: "space-between",
  bottom: "4%",
  left: "4%",
  alignItems: "center",
  color: "#ffffff"
};

const PrimaryTitleStyle = {
  display: "flex",
  flexDirection: "column",
  justifyItems: "space-between",
  alignItems: "flex-start",
  justifySelf: "flex-start"
};

const VideoTitleStyle = {
  justifySelf: "flex-start",
  fontSize: "2em",
  fontWeight: 600,
  lineHeight: 1.21
};

const LoungeTitleStyle = {
  justifySelf: "flex-end",
  fontSize: "1.25em",
  lineHeight: 1.21
};

const TimeStampStyle = {
  justifySelf: "flex-end",
  fontSize: "1.2em",
  fontWeight: "800",
  lineHeight: 1.21,
  padding: "3px 5px 4px 4px",
  alignSelf: "flex-start",
  backgroundColor: "#db3838"
};

export default class Item extends React.Component {
  render() {
    return (
      <div
        className="Item"
        style={ItemStyle}
      >
        <div className="ImageContainer" style={ImageContainerStyle}>
          <img src={this.props.src} alt={this.props.videoTitle}style={ImageStyle}/>
        </div>
        <div className="Title" style={TitleStyle}>
          <div className="PrimaryTitle" style={PrimaryTitleStyle}>
            <div className="VideoTItle" style={VideoTitleStyle}>
              <span>{this.props.videoTitle}</span>
            </div>
            <div className="Lounge-Title" style={LoungeTitleStyle}>
              <span>{this.props.loungeName}</span>
            </div>
          </div>
          <div className="TimeStamp" style={TimeStampStyle}>
            <span>LIVE</span>
          </div>
        </div>
      </div>
    );
  }
}

Item.defaultProps = {
  videoTitle: "Chile vs Argentina",
  loungeName: "Chile Ultras",
  src: "./Assets/El-Clasico.jpg"
};
