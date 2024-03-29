import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , proj_link}) => {
  return (
    <Col size={12} sm={2} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={proj_link} target="_blank">   (Github Repo)</a>
        </div>
      </div>
    </Col>
  )
}
