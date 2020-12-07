resource "aws_vpc" "vpc" {
  cidr_block           = var.cidr_block
  enable_dns_hostnames = true
}

resource "aws_subnet" "subnet_a" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.sg_cidr_block
  availability_zone       = "eu-west-1a"
  map_public_ip_on_launch = true
}

resource "aws_subnet" "subnet_b" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.sg_cidr_block_b
  availability_zone       = "eu-west-1b"
  map_public_ip_on_launch = true
}

resource "aws_subnet" "subnet_c" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.sg_cidr_block_c
  availability_zone       = "eu-west-1c"
  map_public_ip_on_launch = true
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.vpc.id
}

resource "aws_route_table" "rt" {
  vpc_id = aws_vpc.vpc.id

  route {
    cidr_block = var.open_internet
    gateway_id = aws_internet_gateway.igw.id
  }
}

resource "aws_route_table_association" "rt_association" {
  subnet_id      = aws_subnet.subnet_a.id
  route_table_id = aws_route_table.rt.id
}

resource "aws_route_table_association" "rt_association_b" {
  subnet_id      = aws_subnet.subnet_b.id
  route_table_id = aws_route_table.rt.id
}

resource "aws_route_table_association" "rt_association_c" {
  subnet_id      = aws_subnet.subnet_c.id
  route_table_id = aws_route_table.rt.id
}
