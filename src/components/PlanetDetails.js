import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(-45deg, #00222c, #475b64);
  padding-top: 50px;
  ${props =>
    props.visible
      ? "visibility: visible; width:100%; height:100vh;"
      : "visibility: hidden; width:0; height:0;"};
`;

const Panel = styled.div`
  margin: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-bottom: 5px dotted;
  img {
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

const Detail = styled.div`
  background: linear-gradient(#000, transparent);
  border: none;
  padding: 20px;
  line-height: 1.5;
`;

const Info = styled.div`
  margin: 15px 0;
`;

const Close = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.color.secondary};
`;

const propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  onClose: PropTypes.func
};

const PlanetDetails = ({
  name,
  image,
  distance,
  mass,
  diameter,
  visible = false,
  onClose
}) => (
  <Overlay visible={visible}>
    <Panel>
      <img src={image} alt={name} />
      <Detail>
        <h2>Planet {name}</h2>
        <Info>
          <div>Distance from the Sun: {distance}</div>
          <div>Mass: {mass} Kg</div>
          <div>Diameter:{diameter} Km</div>
        </Info>
        <Close onClick={onClose}>&lt; Back to Planets</Close>
      </Detail>
    </Panel>
  </Overlay>
);

PlanetDetails.propTypes = propTypes;

export default PlanetDetails;
