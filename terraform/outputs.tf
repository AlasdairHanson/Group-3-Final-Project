output "rds_endpoint_test" {
  value = module.test_rds.rds_endpoint_test
}

output "jenkinsvm_ip" {
  value = module.Jenkinsvm.public_ip
}

output "testvm_ip" {
  value = module.Testvm.public_ip
}
