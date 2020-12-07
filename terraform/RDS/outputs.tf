output "rds_endpoint_test" {
  value = aws_db_instance.testdb.endpoint
}

#output "rds_endpoint_prod" {
#  value = aws_db_instance.production.endpoint
#}
