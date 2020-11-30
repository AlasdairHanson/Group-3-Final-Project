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
