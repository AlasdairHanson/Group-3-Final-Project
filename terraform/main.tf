provider "aws" {
  region                  = "eu-west-1"
  shared_credentials_file = "/home/ubuntu/.aws.credentials"
}

module "vpc" {
  source = "./VPC"
}

module "sg_node" {
  web_sg_name   = "sg for vpc"
  source        = "./SG"
  open_internet = "0.0.0.0/0"
  vpc_id        = module.vpc.vpc_id
  ingress_ports = [22, 80, 3306, 8080]
}

module "Jenkinsvm" {
  source                 = "./EC2"
  name                   = "ec2"
  subnet_id              = module.vpc.subnet_a_id
  vpc_security_group_ids = [module.sg_node.sg_id]
  associate_public_ip_address = true
  tags = {
    Name = "Jenkins_vm"
  }
}

module "Testvm" {
  source                 = "./EC2"
  name                   = "ec2"
  subnet_id              = module.vpc.subnet_a_id
  vpc_security_group_ids = [module.sg_node.sg_id]
  associate_public_ip_address = true
  tags = {
    Name = "Test_vm"
  }
}

module "test_rds"{
  source = "./RDS"
  dbname = "testdb"
  db_subnet_group_name = aws_db_subnet.default.name
  subnet_ids = [module.vpc.subnet_a_id, module.vpc.subnet_b_id]
  vpc_security_group_ids = [module.sg_node.sg_id]
}







