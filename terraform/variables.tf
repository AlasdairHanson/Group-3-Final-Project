variable "username1" {
  description = "username for db"
}

variable "password1" {
  description = "password for db"
}

variable "key_pub" {
  default = "~/.ssh/id_rsa.pub"
}

variable "instance" {
  default = "t2.medium"
}
