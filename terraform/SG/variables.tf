variable "web_sg_name" {
  default = "default_web_sg"
}

variable "web_sg_description" {
  default = "allow ssh connection"
}

variable "open_internet" {
  default = "0.0.0.0/0"
}

variable "egress_ports" {
  type = list
  default = ["0.0.0.0/0"]
}

variable "vpc_id" {
  description = "vpc id for sg"
}
