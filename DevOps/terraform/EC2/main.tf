resource "aws_instance" "ec2" {
  ami                    = var.ami_id
  instance_type          = var.instance
  key_name = var.keyy
  subnet_id              = var.subnet_id
  vpc_security_group_ids = var.vpc_security_group_ids
  tags = {
    name = var.name
  }
  associate_public_ip_address = var.enable_public_ip
}

