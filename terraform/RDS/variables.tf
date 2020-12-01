variable "dbname" {
  description = "database name"
  type = string
}


variable "username" {
  description = "inital database username"
  type = string
}

variable "password" {
  description = "intial database password"
  type = string
}

variable "dbsubnet_gpname"{
  description = "database subnet group name"
  default = "default"
}

variable "subnet_ids" {
  description = "list of subnet ids"
}

variable "vpc_security_group_ids" {
  description = "list of sg ids"
}
