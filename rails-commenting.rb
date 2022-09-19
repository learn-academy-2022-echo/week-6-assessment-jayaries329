# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Create the controller with a class name of BlogPosts and a controller action method named index to list all available data from the database.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # Create an instance variable named posts that contains the object BlogPost and use the built-in .all method to enumerate over the elements contained within the object.
    @posts = BlogPost.all
  end

  # ---3)
  # Create a controller action method named show that will obtain a specific item from the database. Use the built-in method .find on the object contained in the instance variable to locate and return the specified key-value pair.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # Create a controller action named new that creates an item to insert into the database. Use the built-in method .new to create an instance in the instance variable's object. Create the controller action named create that will add that new instance into the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Use the built-in method .create to save a new instance into the database based on whether or not it passes specified validations. An if else statement using the .valid built-in method runs the validations and if no errors were detected, the instance will be added. Otherwise, a validation that gives a false return will not allow the addition. Create a controller action named edit that will update an item in the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # Use the .find method to locate and return the specified key-value pair. Create a controller action named update that will overwrite an existing instance. Use the .find method to locate the specific instance for editing.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Use the .update method to update and save an instance to the database based on validations. An if else statement using the .valid built-in method connected with the instance variable runs the validations and if no errors were detected, the instance will be updated. Otherwise, a validation that gives a false return will not allow the update. Create a controller action named destroy that will remove an item from the database. Use the .find method to locate the specific instance for editing. The .destroy method in the conditional statement destroys the instance and responds to the browser. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # There really isn't a need for an if statement with a destroy call because the call will be successful as long as the instance was was retrieved by .find without error.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # Call a private method to control the access to the methods within this particular class. Create a controller action named blog_post_params to contain the needed logic.

  private
  def blog_post_params
    # ---10)
    # The .require and .permit methods are used to set the specific paramaters to be observed and followed.
    params.require(:blog_post).permit(:title, :content)
  end
end
