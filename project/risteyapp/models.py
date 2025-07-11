# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from .utils import *


# User Abstract user
class User(AbstractUser):
    id = models.CharField(primary_key=True, max_length=22, default=secure_short_uuid, editable=False)
    balance = models.IntegerField(null=True, blank=True, default=0)
    refer = models.IntegerField(default=generate_random_number)
    role = models.CharField(max_length=20, choices=[
        ('superadmin', 'SuperAdmin'),
        ('admin', 'Admin'),
        ('staff', 'Staff'),
        ('user', 'User'),
        ('developer', 'Developer'),
        
    ], default='user')
    gender = models.CharField(max_length=10,null=True,blank=True)
    ref = models.IntegerField(null=True,blank=True,default=885695)
    # transactions = models.JSONField(default=list,null=True,blank=True)
    state = models.CharField(max_length=20,blank=True)
    disttrict = models.CharField(max_length=20,blank=True)
    pic = models.ImageField(upload_to='Staff_Pic',default='Staff_Pic/profilepic.jpg',blank=True,null=True)
    contact = models.IntegerField(null=True,blank=True)
    caste = models.CharField(max_length=20,blank=True)


    # def __str__(self):
    #     return self.username

# UserData roles based all details fetch 
class UserData(models.Model):
    User_id = models.CharField(max_length=22,unique=True)
    refer = models.IntegerField(null=True,blank=True)
    role = models.CharField(max_length=20,default='user')
    username = models.CharField(max_length=20,null=True,blank=True)
    firstname = models.CharField(max_length=20,null=True,blank=True)
    caste = models.CharField(max_length=20,blank=True)
    religion = models.CharField(max_length=20,null=True,blank=True)
    subcaste=models.CharField(max_length=20,null=True,blank=True)

    gender = models.CharField(max_length=10,null=True,blank=True)
    dob = models.CharField(max_length=10,null=True,blank=True)
    age = models.IntegerField(null=True,blank=True)
    contact = models.IntegerField(null=True,blank=True)
    contact1 = models.IntegerField(null=True,blank=True)
    address = models.CharField(max_length=400,null=True,blank=True)

    instagram = models.CharField(max_length=30,null=True,blank=True)
    # aadhar = models.IntegerField(null=True,blank=True)
    email = models.EmailField(null=True,blank=True)
    cover_img = models.ImageField(upload_to='User_cover_pic',default='User_Pic/profilepic.jpg',blank=True,null=True)
    pic = models.ImageField(upload_to='User_Pic',default='User_Pic/profilepic.jpg',blank=True,null=True)
    disttrict = models.CharField(max_length=20,blank=True)
    state = models.CharField(max_length=20,blank=True)
    city = models.CharField(max_length=20,blank=True)
    country = models.CharField(max_length=20,blank=True,default='India')
    # address = models.TextField(null=True,blank=True)
    like = models.JSONField(default=list,blank=True)
    create_date = models.DateField(auto_now=True)
    user_apply = models.JSONField(default=list,blank=True)
    marrige_status = models.CharField(max_length=10,null=True,blank=True)
    university = models.CharField(max_length=30,null=True,blank=True)
    course = models.CharField(max_length=30,null=True,blank=True)
    job_title = models.CharField(max_length=20,null=True,blank=True)
    job_type = models.CharField(max_length=30,null=True,blank=True)
    # description= models.CharField(max_length=300,null=True,blank=True)
    salary = models.IntegerField(null=True,blank=True)
    father_name = models.CharField(max_length=30,null=True,blank=True)
    mother_name = models.CharField(max_length=30,null=True,blank=True)
    brother = models.IntegerField(null=True,blank=True)
    brother_marrige = models.IntegerField(null=True,blank=True)
    sister = models.IntegerField(null=True,blank=True)
    sister_marrige = models.IntegerField(null=True,blank=True)
    # family_status=models.CharField(max_length=50,null=True,blank=True)
    # family_values=models.CharField(max_length=50,null=True,blank=True)
    # time = models.TimeField(null=True, blank=True)

    # no_of_children = models.IntegerField()
    mother_tongue = models.CharField(max_length=100)
    # mobile_no = models.CharField(max_length=15)
    height = models.DecimalField(max_digits=5, decimal_places=2)
    # occupation = models.CharField(max_length=100)
    # contact_address = models.TextField()


    # place = models.CharField(max_length=255, null=True, blank=True)
    # income_range=models.CharField(max_length=50,null=True,blank=True)
    # field_of_study=models.CharField(max_length=50,null=True,blank=True)
    # education_level=models.CharField(max_length=50,null=True,blank=True)
    ref = models.IntegerField(null=True,blank=True)
    # bank_account = models.IntegerField(null=True,blank=True,default=0)
    # ifsc_code = models.CharField(max_length=15,null=True,blank=True,default='SBIN0989054')
    # upi_id = models.CharField(max_length=15,null=True,blank=True,default='upi_id.oksbi')

    def __str__(self):
        return self.username
    
# User_Caste
class User_Caste(models.Model):
    religion = models.CharField(max_length=20,null=True,blank=True)
    state=models.CharField(max_length=50,blank=True,null=True)
    caste=models.JSONField(blank=True,default=list)

# User_State
class User_State(models.Model):
    state=models.CharField(max_length=50,blank=True,null=True)
    district=models.JSONField(blank=True,default=list)
    
 # UserImages
class UserImages(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    user_id = models.CharField(max_length=22,null=True,blank=True)
    images = models.ImageField(upload_to='User_images',blank=True)
    cover_img = models.ImageField(upload_to='User_cover_pic',default='User_Pic/profilepic.jpg',blank=True,null=True)
    
# PostCharges
class PostCharges(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    post_charges = models.IntegerField()
    staff_commission = models.IntegerField()

# UserTotalRevenue
class UserTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    user_id = models.CharField(max_length=22,null=True,blank=True)
    user_amount = models.IntegerField(null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date"

#   AdminTotalRevenue
class AdminTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    admin_id = models.CharField(max_length=22,null=True,blank=True)
    admin_amount = models.IntegerField(null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date" 
    

# StaffTotalRevenue
class StaffTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    staff_id = models.CharField(max_length=22,null=True,blank=True)
    staff_amount = models.IntegerField(null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date"
    
# DevTotalRevenue
class DevTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    dev_id = models.CharField(max_length=22,null=True,blank=True)
    dev_amount = models.CharField(max_length=22,null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date"
    
# class Course(models.Model):
#     id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
#     course = models.CharField(max_length=50,blank=True,null=True)

# StaffTransactions
class StaffTransactions(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    staff_id = models.CharField(max_length=25)
    amount = models.IntegerField()
    upi_id = models.CharField(max_length=25,null=True,blank=True)
    bank_account = models.IntegerField(null=True,blank=True)
    contact = models.IntegerField(null=True,blank=True)
    ifsc_code = models.CharField(max_length=15,null=True,blank=True)
    date = models.DateField(auto_now=True)
    type = models.CharField(max_length=10)
    status = models.CharField(max_length=8,default='pending')

# UserTransactions
class UserTransactions(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    user_id = models.CharField(max_length=25)
    amount = models.IntegerField()
    upi_id = models.CharField(max_length=25,null=True,blank=True)
    bank_account = models.IntegerField(null=True,blank=True)
    contact = models.IntegerField(null=True,blank=True)
    ifsc_code = models.CharField(max_length=15,null=True,blank=True)
    date = models.DateField(auto_now=True)
    type = models.CharField(max_length=10)
    status = models.CharField(max_length=8,default='pending')

#  DevTransactions 
class DevTransactions(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    user_id = models.CharField(max_length=25)
    amount = models.IntegerField()
    upi_id = models.CharField(max_length=25,null=True,blank=True)
    bank_account = models.IntegerField(null=True,blank=True)
    contact = models.IntegerField(null=True,blank=True)
    ifsc_code = models.CharField(max_length=15,null=True,blank=True)
    date = models.DateField(auto_now=True)
    type = models.CharField(max_length=10)
    status = models.CharField(max_length=8,default='pending')

#  BankDetails 
class BankDetails(models.Model):
    id = models.BigIntegerField(primary_key=True)
    user_id = models.CharField(max_length=25,null=True,blank=True)
    bank_account = models.IntegerField(null=True,blank=True,default=00000000000)
    ifsc_code = models.CharField(max_length=15,null=True,blank=True,default='SBIN0989054')
    upi_id = models.CharField(max_length=15,null=True,blank=True,default='upi_id.oksbi')

 
#  Subscriber 
class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email


#  Suceess_Story
class Suceess_Story(models.Model):
    title=models.CharField(max_length=250,null=True,blank=True)
    description = models.TextField(null=True, blank=True)


    def __str__(self):
        return self.title