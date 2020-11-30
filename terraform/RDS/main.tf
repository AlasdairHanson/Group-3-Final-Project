resource "aws_db_subnet_group" "default" {
  name       = "var.dbsubnet_gpname"
  subnet_ids = [var.subnet_a_id, var.subnet_b_id]

  tags = {
    Name = "Proj database"
  }
}


resource "aws_db_instance" "testdb" {
  allocated_storage      = 20
  storage_type           = "gp2"
  engine                 = "mysql"
  engine_version         = "5.7"
  instance_class         = "db.t2.micro"
  name                   = "var.dname"
  username               = "var.username"
  password               = "var.pass"
  parameter_group_name   = "default.mysql5.7"
  skip_final_snapshot    = "true"
  db_subnet_group_name   =var.dbsubnet_gpname
  vpc_security_group_ids = var.vpc_security_group_ids
}

