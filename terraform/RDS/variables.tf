variable "dbname" {
  description = "database name"
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

variable "rds_password"{
default = "~/credentials/rds_passwd"
}

variable "rds_username"{
default = "~/credentials/rds_username"
}

variable "db_name"{
default = "testdb"
}


