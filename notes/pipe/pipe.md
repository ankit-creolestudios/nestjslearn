# Pipe

A pipe is a class with @Injectable() decorator,which implements pipetransform interface

case 1: Transformation
transform input data into desired forms eg. string to integer

case 2: Validation
it evaluate input data and if valid pass through unchaned,otherwise throw exception when data is incorrect

#

Pipes run inside the exceptions zone. This means that when a Pipe throws an exception it is handled by the exceptions layer (global exceptions filter and any exceptions filters that are applied to the current context).
it should be clear that when an exception is thrown in a Pipe, no controller method is subsequently executed. This gives you a best-practice technique for validating data coming into the application from external sources at the system boundary.

# built in pipes
