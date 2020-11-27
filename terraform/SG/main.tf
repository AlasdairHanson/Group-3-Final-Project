resource "aws_security" "web_sg" {
  name = var.web_sg_name
  description = var.web_sg_description
  vpc_id = var.vpc_id

  dynamic "igress" {
    iterator = port
    for_each = var.ingress_ports
    content {
      from_port = port.value
      protocol = "tcp"
      to_port = port.value
      cidr_blocks = [var.open_internet]
    }
  }
  
  egress {
    from_port = var.egress_ports
    protocol = "-1"
    to_port = var.egress_ports
    cidr_blocks = var [var.open_internet]
  }


}
